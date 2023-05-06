package number_of_students_doing_homework_at_a_given_time

func busyStudent(startTime []int, endTime []int, queryTime int) (ans int) {
	for i, s := range startTime {
		if s <= queryTime && queryTime <= endTime[i] {
			ans++
		}
	}
	return
}
