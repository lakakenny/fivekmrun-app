import 'package:fivekmrun_flutter/common/constants.dart';
import 'package:intl/intl.dart';

final DateFormat dateFromat = DateFormat(Constants.DATE_FORMAT);

class Run {
  final int id;
  final int eventId;
  final DateTime date;
  final int timeInSeconds;
  final String time;
  final String location;
  final int position;
  final String speed;
  final String notes;
  final String pace;

  // Calculated
  int differenceFromPrevious;
  int differenceFromBest;

  String get displayDate => dateFromat.format(date);

  Run(
      {this.date,
      this.time,
      this.timeInSeconds,
      this.location,
      this.eventId,
      this.differenceFromPrevious,
      this.differenceFromBest,
      this.position,
      this.speed,
      this.notes,
      this.pace})
      : id = ("$date#$time#$location").hashCode;

  Run.fromJson(dynamic json)
      : id = json["r_id"],
        eventId = json["r_eventid"],
        date = DateTime.fromMillisecondsSinceEpoch(json["e_date"] * 1000),
        time = timeInSecondsToString(json["r_time"]),
        timeInSeconds = json["r_time"],
        location = json["n_name"],
        differenceFromBest = json[""],
        differenceFromPrevious = json[""],
        position = json["r_finish_pos"],
        speed = timeInSecondsToSpeed(json["r_time"]),
        notes = "",
        pace = timeInSecondsToPace(json["r_time"]);

  static List<Run> listFromJson(Map<String, dynamic> json) {
    List<dynamic> runs = json["runners"];
    var result = runs.map((d) => Run.fromJson(d)).toList();
    return result;
  }

  static String timeInSecondsToString(int timeInSeconds, {bool sign = false}) {
    String signString = "";
    if (sign) {
      signString = timeInSeconds < 0 ? "-" : "+";
      timeInSeconds = timeInSeconds < 0 ? -timeInSeconds : timeInSeconds;
    }

    return signString +
        (timeInSeconds ~/ 60).toString().padLeft(2, '0') +
        ":" +
        (timeInSeconds % 60).toString().padLeft(2, '0');
  }

  static String timeInSecondsToSpeed(int timeInSeconds) {
    return ((5000 / timeInSeconds) * 3.6).toStringAsFixed(2);
  }

  static String timeInSecondsToPace(int timeInSeconds) {
    if (timeInSeconds == 0) {
      return "";
    }
    double paceDouble = timeInSeconds / 5.0;
    final duration = Duration(seconds: paceDouble.toInt());
    String pace = duration.toString().substring(2, 7);

    return pace;
  }
}
