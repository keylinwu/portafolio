import 'package:flutter/material.dart';
import 'package:portafolio/ui/theme/colors.dart';
import 'package:portafolio/ui/theme/text_style.dart';

class PortfolioTheme {
  PortfolioTheme._();

  static const textTheme = TextTheme(
      displayLarge: PortfolioTextStyles.displayLarge,
      displayMedium: PortfolioTextStyles.displayMedium,
      displaySmall: PortfolioTextStyles.displaySmall,
      headlineLarge: PortfolioTextStyles.headlineLarge,
      headlineMedium: PortfolioTextStyles.headlineMedium,
      headlineSmall: PortfolioTextStyles.headlineSmall,
      bodyLarge: PortfolioTextStyles.bodyLarge,
      bodyMedium: PortfolioTextStyles.bodyMedium,
      bodySmall: PortfolioTextStyles.bodySmall,
      labelLarge: PortfolioTextStyles.labelLarge,
      labelMedium: PortfolioTextStyles.labelMedium,
      labelSmall: PortfolioTextStyles.labelSmall);

  static const colorScheme = ColorScheme(
    brightness: Brightness.light,
    primary: PortfolioColors.primary,
    onPrimary: PortfolioColors.onPrimary,
    onPrimaryContainer: PortfolioColors.onPrimaryContainer,
    primaryContainer: PortfolioColors.primaryContainer,
    secondary: PortfolioColors.secondary,
    onSecondary: PortfolioColors.onSecondary,
    secondaryContainer: PortfolioColors.secondaryContainer,
    onSecondaryContainer: PortfolioColors.onSecondaryContainer,
    error: Colors.redAccent,
    onError: Colors.red,
    background: PortfolioColors.background,
    onBackground: PortfolioColors.onBackground,
    surface: PortfolioColors.background,
    onSurface: PortfolioColors.onBackground,
  );

  static final outlinedButtonTheme = OutlinedButtonThemeData(
    style: ButtonStyle(
      side: MaterialStateProperty.all<BorderSide>(
        const BorderSide(
          color: PortfolioColors.primary,
          width: 1,
          style: BorderStyle.solid,
        ),
      ),
      padding: MaterialStateProperty.all<EdgeInsets>(
        const EdgeInsets.all(20),
      ),
      textStyle: MaterialStateProperty.all(PortfolioTextStyles.bodyLarge),
      overlayColor: MaterialStateProperty.all(PortfolioColors.tertiaryContainer),
      // backgroundColor: MaterialStateProperty.all(overlayColor),
      shape: const MaterialStatePropertyAll(
        RoundedRectangleBorder(borderRadius: BorderRadius.zero),
      ),
    ),
  );

  static final filledButtonTheme = FilledButtonThemeData(
    style: ButtonStyle(
      backgroundColor: MaterialStateProperty.all<Color>(colorScheme.primary),
      padding: MaterialStateProperty.all<EdgeInsets>(const EdgeInsets.all(20)),
      textStyle: MaterialStateProperty.all(PortfolioTextStyles.bodyLarge),
      overlayColor: MaterialStateProperty.all(PortfolioColors.tertiaryContainer),
      shape: const MaterialStatePropertyAll(
        RoundedRectangleBorder(borderRadius: BorderRadius.zero),
      ),
    ),
  );

  static ThemeData lightTheme = ThemeData(
    outlinedButtonTheme: outlinedButtonTheme,
    filledButtonTheme: filledButtonTheme,
    colorScheme: colorScheme,
    textTheme: textTheme,
    useMaterial3: true,
  );
}
