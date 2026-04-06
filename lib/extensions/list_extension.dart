
extension ListNullSafetyExtension<T> on List<T?>? {
  /// Converts a nullable List of nullable items into a non-nullable List of the same type,
  List<T> removeNulls() {
    if (this == null) return [];
    this!.removeWhere((value) => (value == null));
    return List.from(this!).whereType<T>().toList();
  }
}