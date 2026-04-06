import 'package:flutter/material.dart';
import 'package:portafolio/ui/theme/fonts.dart';

class PortfolioTextStyles {
  PortfolioTextStyles._();

  static const displayLarge = TextStyle(
    fontFamily: PortfolioFonts.lostaMasta,
    fontSize: 72, //57-64
    fontWeight: FontWeight.w700,
  );

  static const displayMedium = TextStyle(
    fontFamily: PortfolioFonts.lostaMasta,
    fontSize: 60, //45-52
    fontWeight: FontWeight.w700,
  );

  static const displaySmall = TextStyle(
    fontFamily: PortfolioFonts.lostaMasta,
    fontSize: 48, //36-44
    fontWeight: FontWeight.w700,
  );

  static const headlineLarge = TextStyle(
    fontFamily: PortfolioFonts.lostaMasta,
    fontSize: 72, //32-40
    fontWeight: FontWeight.w700,
  );

  static const headlineMedium = TextStyle(
    fontFamily: PortfolioFonts.lostaMasta,
    fontSize: 48, //28-36
    fontWeight: FontWeight.w700,
  );

  static const headlineSmall = TextStyle(
    fontFamily: PortfolioFonts.lostaMasta,
    fontSize: 36, //24-32
    fontWeight: FontWeight.w400,
  );

  static const labelLarge = TextStyle(
    fontFamily: PortfolioFonts.roboto,
    fontSize: 48, // 14-20
    fontWeight: FontWeight.w700,
  );

  static const labelMedium = TextStyle(
    fontFamily: PortfolioFonts.roboto,
    fontSize: 36, //12-16
    fontWeight: FontWeight.w400,
  );

  static const labelSmall = TextStyle(
    fontFamily: PortfolioFonts.roboto,
    fontSize: 16, //14-20
    fontWeight: FontWeight.w700,
  );

  static const bodyLarge = TextStyle(
    fontFamily: PortfolioFonts.roboto,
    fontSize: 24, //16-24
    fontWeight: FontWeight.w300,
  );

  static const bodyMedium = TextStyle(
    fontFamily: PortfolioFonts.roboto,
    fontSize: 20, //14-20
    fontWeight: FontWeight.w400,
  );

  static const bodySmall = TextStyle(
    fontFamily: PortfolioFonts.roboto,
    fontSize: 16, //12-16
    fontWeight: FontWeight.w300,
  );
}
