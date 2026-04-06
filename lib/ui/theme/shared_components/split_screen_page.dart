import 'package:flutter/material.dart';
import 'package:portafolio/extensions/context_extension.dart';

class SplitScreenPage extends StatelessWidget {
  final Widget leftWidget;
  final Widget rightWidget;
  final EdgeInsets padding;
  final Color? backgroundColor;

  const SplitScreenPage(
    this.leftWidget,
    this.rightWidget, {
    this.padding = const EdgeInsets.only(top: 100),
    Key? key,
    this.backgroundColor,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // double width = MediaQuery.of(context).size.width * 0.70;
    return Container(
      color: backgroundColor ?? context.colorScheme.background,
      padding: padding,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          leftWidget,
          rightWidget,
        ],
      ),
    );
  }
}
