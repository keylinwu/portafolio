import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:portafolio/constants/file_path.dart';
import 'package:portafolio/constants/strings.dart';
import 'package:portafolio/extensions/context_extension.dart';
import 'package:portafolio/ui/theme/sizes.dart';
import 'package:portafolio/ui/theme/styled_text.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.only(
        top: 100,
        left: 120,
        right: 120,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          _LeftSide(),
          _RightSide(),
        ],
      ),
    );
  }
}

class _LeftSide extends StatelessWidget {
  const _LeftSide();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const DisplayLargeText(Strings.hiTitle),
        Padding(
          padding: const EdgeInsets.only(top: Sizes.large),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const LabelMediumText(Strings.techLead),
              const BodyLargeText(Strings.role),
              const SizedBox(height: Sizes.medium),
              ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 500),
                child: const BodyMediumText(Strings.intro),
              ),
              _buildButtons(),
            ],
          ),
        )
      ],
    );
  }

  Widget _buildButtons() {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 20),
      child: Row(
        children: [
          FilledButton(
              onPressed: () {
                if (kDebugMode) {
                  print('Download Resume');
                }
              },
              child: const Text('Resume')),
          const SizedBox(width: 30),
          OutlinedButton(
            onPressed: () {
              if (kDebugMode) {
                print('Let\'s Talk');
              }
            },
            child: const Text('Let\'s Talk'),
          )
        ],
      ),
    );
  }
}

class _RightSide extends StatelessWidget {
  const _RightSide();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 150.0),
      child: CircleAvatar(
        radius: 250.0,
        backgroundColor: context.colorScheme.primary,
        foregroundImage: const AssetImage(FilePath.profileImage),
      ),
    );
  }
}
