class Event {
  final int id;
  final String title;
  final DateTime date;
  final String imageUrl;
  final String location;
  final String detailsUrl;

  Event({
    this.title,
    this.date,
    this.imageUrl,
    this.location,
    this.detailsUrl,
  }) : id = ("$date#$title#$location").hashCode;
}
