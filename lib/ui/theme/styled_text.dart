import 'package:flutter/material.dart';
import 'package:portafolio/extensions/context_extension.dart';

class TextInterface extends StatelessWidget {
  final String text;
  final Color? color;

  const TextInterface(this.text, {super.key, this.color});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }
}

class DisplayLargeText extends TextInterface {
  const DisplayLargeText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.displayLarge?.copyWith(
        color: color ?? context.colorScheme.primary,
      ),
    );
  }
}

class HeadlineLargeText extends TextInterface {
  const HeadlineLargeText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.headlineLarge?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class HeadlineMediumText extends TextInterface {
  const HeadlineMediumText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style:
          context.textTheme.headlineMedium?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class LabelLargeText extends TextInterface {
  const LabelLargeText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.labelLarge?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class LabelMediumText extends TextInterface {
  const LabelMediumText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.labelMedium?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class LabelSmallText extends TextInterface {
  const LabelSmallText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.labelSmall?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class BodyLargeText extends TextInterface {
  const BodyLargeText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.bodyLarge?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class BodyMediumText extends TextInterface {
  const BodyMediumText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.bodyMedium?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class BodySmallText extends TextInterface {
  const BodySmallText(super.text, {super.color, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: context.textTheme.bodySmall?.copyWith(color: color ?? context.colorScheme.primary),
    );
  }
}

class StyledText extends StatelessWidget {
  final String text;
  final TextStyle? withTextStyle;

  const StyledText(this.text, {required this.withTextStyle, super.key});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: withTextStyle,
      textAlign: TextAlign.center,
    );
  }
}
