import 'package:flutter/material.dart';
import 'package:portafolio/extensions/context_extension.dart';
import 'package:portafolio/screens/menu/menu_section.dart';
import 'package:portafolio/ui/theme/sizes.dart';

class MenuAppBar extends StatefulWidget implements PreferredSizeWidget {
  const MenuAppBar({super.key});

  @override
  State<MenuAppBar> createState() => _MenuAppBarState();

  @override
  // TODO: implement preferredSize
  Size get preferredSize => const Size.fromHeight(200.0);
}

class _MenuAppBarState extends State<MenuAppBar> {
  //TODO: MenuValues should come from a view model
  List<_MenuButton> options =
      MenuSection.values.map((section) => _MenuButton(section: section)).toList();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(Sizes.medium),
      color: context.colorScheme.primary,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: options,
      ),
    );
  }
}

class _MenuButton extends StatelessWidget {
  final MenuSection section;

  const _MenuButton({required this.section});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      child: Text(
        section.title,
        style: context.textTheme.titleMedium?.copyWith(color: context.colorScheme.onPrimary),
      ),
      onPressed: () => print('Option $section'),
    );
  }
}
