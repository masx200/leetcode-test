package index

func movesToChessboard(board [][]int) int {
	var n = len(board)
	var rowSum = 0
	var colSum = 0
	var rowDiff = 0
	var colDiff = 0
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if itob((board[0][0]) ^ (board[i][0]) ^ (board[0][j]) ^ (board[i][j])) {
				return -1
			}
		}
	}
	for i := 0; i < n; i++ {
		rowSum += board[0][i]
		colSum += board[i][0]
		rowDiff += Btoi(board[i][0] == i%2)
		colDiff += Btoi(board[0][i] == i%2)
	}
	if n/2 > rowSum || rowSum > (n+1)/2 {
		return -1
	}
	if n/2 > colSum || colSum > (n+1)/2 {
		return -1
	}
	if itob(n % 2) {
		if itob(rowDiff % 2) {
			rowDiff = n - rowDiff
		}
		if itob(colDiff % 2) {
			colDiff = n - colDiff
		}
	} else {
		rowDiff = min(n-rowDiff, rowDiff)
		colDiff = min(n-colDiff, colDiff)
	}
	return (rowDiff + colDiff) / 2

}
func Btoi(b bool) int {
	if b {
		return 1
	}
	return 0
}
func itob(b int) bool {
	return b != 0
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
