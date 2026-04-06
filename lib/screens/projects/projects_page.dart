import 'package:country_flags/country_flags.dart';
import 'package:flutter/material.dart';
import 'package:portafolio/extensions/context_extension.dart';
import 'package:portafolio/ui/theme/styled_text.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: context.colorScheme.background,
      padding: const EdgeInsets.all(100),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          _buildTitle(context),
          const _ProjectsGrid(),
        ],
      ),
    );
  }

  Widget _buildTitle(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.only(bottom: 50.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          HeadlineLargeText('Projects'),
        ],
      ),
    );
  }
}

class _ProjectsGrid extends StatelessWidget {
  final gridDelegate =
      const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 5, mainAxisExtent: 3);

  const _ProjectsGrid({super.key});

  @override
  Widget build(BuildContext context) {
    return const Wrap(
      crossAxisAlignment: WrapCrossAlignment.center,
      direction: Axis.horizontal,
      spacing: 100,
      runAlignment: WrapAlignment.spaceBetween,
      runSpacing: 40,
      children: <Widget>[
        _ProjectTile(title: 'SOFI', subtitle: 'Social Financial'),
        _ProjectTile(title: 'Playlist Notifier', subtitle: 'Social Financial'),
        _ProjectTile(title: 'AMP', subtitle: 'Warner Music Group'),
        _ProjectTile(title: 'Exclusive', subtitle: 'Warner Music Group'),
        _ProjectTile(title: 'Betway'),
        _ProjectTile(title: 'BlueBird'),
        _ProjectTile(title: 'EQ Bank'),
        _ProjectTile(title: 'PC Express', subtitle: 'Loblaws'),
      ],
    );
  }
}

class _ProjectTile extends StatelessWidget {
  const _ProjectTile({
    required this.title,
    this.subtitle = 'Subtitle',
    this.stack = 'He\'d have you all unravel at the',
    this.description = '',
    this.location,
    super.key,
  });

  final String title;
  final String subtitle;
  final String stack;
  final CountryFlag? location;
  final String description;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: context.colorScheme.tertiaryContainer, //.withOpacity(0.6)
        borderRadius: BorderRadius.circular(10),
      ),
      height: 200,
      width: 300,
      child: Column(
        children: [
          //image
          LabelMediumText(title, color: context.colorScheme.onPrimary),
          LabelSmallText(subtitle, color: context.colorScheme.onPrimary),
          BodySmallText(stack, color: context.colorScheme.onPrimary),
          IconButton(
            onPressed: () => (),
            icon: const Icon(Icons.open_in_new_outlined),
            color: context.colorScheme.onPrimary,
          )
        ],
      ),
    );
  }
}
