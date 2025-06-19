func lengthOfLastWord(s string) int {
	end:=s.size-1
	for end>=0 && s[end]==' '{
		end--
	}
	start:=end
	for start>=0 && s[start]!=' '{
		start--
	}
	return end-start
}