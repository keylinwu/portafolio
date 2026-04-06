import 'package:flutter/material.dart';
import 'package:portafolio/constants/file_path.dart';
import 'package:portafolio/extensions/context_extension.dart';
import 'package:portafolio/ui/theme/shared_components/split_screen_page.dart';
import 'package:portafolio/ui/theme/styled_text.dart';

class BuildingAppsPage extends StatelessWidget {
  const BuildingAppsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SplitScreenPage(
      const Expanded(child: _LeftContainer()),
      Image.asset(
        FilePath.anime2,
        scale: 1.2,
      ),
      padding: EdgeInsets.zero,
      backgroundColor: context.colorScheme.secondary,
    );
  }
}

class _LeftContainer extends StatelessWidget {
  const _LeftContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: context.colorScheme.secondary,
      padding: const EdgeInsets.only(top: 50.0, left: 50.0, right: 50.0),
      child: const Column(
        children: [
          _Title(),
          _Body(),
        ],
      ),
    );
  }
}

class _Body extends StatelessWidget {
  const _Body({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20.0),
      child: Column(
        children: [
          _buildBoxWithText(context, 'Crossplatform \nFlutter'),
          _buildBoxWithText(context, 'Mobile Native \niOS'),
          _buildBoxWithText(context, 'UI/UX', isLast: true),
        ],
      ),
      // child: ConstrainedBox(
      //   constraints: const BoxConstraints(maxWidth: 500),
      //   child: const BodyMediumText(
      //       'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam \n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationLorem ipsum dolor sit amet, '),
      // ),
    );
  }

  Widget _buildBoxWithText(BuildContext context, String text, {bool isLast = false}) {
    return Padding(
      padding:
          isLast ? const EdgeInsets.only(top: 20.0) : const EdgeInsets.symmetric(vertical: 20.0),
      child: Container(
        height: 170,
        width: 270,
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          borderRadius: const BorderRadius.all(Radius.circular(15)),
          color: context.colorScheme.secondaryContainer,
        ),
        child: Center(
          child: StyledText(text, withTextStyle: context.textTheme.labelSmall),
        ),
      ),
    );
  }
}

class _Title extends StatelessWidget {
  const _Title({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        StyledText(
          '7',
          withTextStyle: context.textTheme.displayLarge
              ?.copyWith(color: context.colorScheme.onSecondary, fontSize: 130),
        ),
        StyledText(
          '+ ',
          withTextStyle: context.textTheme.labelLarge
              ?.copyWith(color: context.colorScheme.onSecondary, fontSize: 100),
        ),
        StyledText(
          'Building Apps',
          withTextStyle: context.textTheme.displayMedium?.copyWith(
            color: context.colorScheme.onSecondary,
          ),
        ),
      ],
    );
  }
}
