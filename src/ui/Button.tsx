import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  useTheme,
} from '@shopify/restyle';

import {Theme} from './theme';

import {View} from './View';
import {Text} from './Text';

const buttonVariant = createVariant({themeKey: 'buttonVariants'});

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof View>,
  Theme
>([buttonVariant], View);

const restyleFunctions = [
  buttonVariant as any,
  spacing,
  border,
  backgroundColor,
];

type Props = SpacingProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress?: () => void;
    label?: string;
    outline?: boolean;
    loading?: boolean;
    disabled?: boolean;
  };

export const Button = ({
  onPress,
  label,
  disabled = false,
  loading = false,
  variant = 'primary',
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, {...rest, variant});

  const textVariant = ('button_' + variant) as Partial<
    keyof Omit<Theme['textVariants'], 'defaults'>
  >;

  const theme = useTheme<Theme>();
  const {text} = theme.colors;

  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer {...props}>
        {loading ? (
          <ActivityIndicator color={text} />
        ) : (
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={18}
            variant={textVariant}>
            {label}
          </Text>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};
