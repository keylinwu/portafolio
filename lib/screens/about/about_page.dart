import 'package:flutter/material.dart';
import 'package:portafolio/constants/file_path.dart';
import 'package:portafolio/extensions/context_extension.dart';
import 'package:portafolio/ui/theme/shared_components/split_screen_page.dart';
import 'package:portafolio/ui/theme/styled_text.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SplitScreenPage(
      Image.asset(FilePath.animeCr),
      const Expanded(child: _AboutMe()),
    );
  }
}

class _AboutMe extends StatelessWidget {
  const _AboutMe({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Container(
              padding: const EdgeInsets.all(10),
              color: context.colorScheme.primary,
              child: StyledText(
                'About me',
                withTextStyle: context.textTheme.headlineMedium?.copyWith(
                  color: context.colorScheme.onPrimary,
                ),
              ),
            ),
          ],
        ),
        // Spacer(),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 100),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 500),
            child: const BodyMediumText(
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam \n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationLorem ipsum dolor sit amet, '),
          ),
        )
      ],
    );
  }
}
