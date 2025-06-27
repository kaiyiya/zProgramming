func generatePa(n int )[]string  {
	type state struct{
		current string
		open int 
		remaining int

	}
	results:=[]string{}
	stack:=[]state{{"",0,n}}
	for len(stack)>0{
		currentState:=stack[len(stack)-1]
		stack=stack[:len(stack)-1]
		if(currentState.remaining==0){
			results=append(results,currentState.current)
			continue
		}
		if(currentState.open>0)
		{
			stack=append(stack,state{
				current:currentState.current+")",
				open:currentState.open-1,
				remaining:currentState.remaining-1

			})

		}
		if currentState.open<currentState.remaining{
			stack=append(stack,state{
				current:currentState.current+"(",
				open:currentState.open+1,
				remaining: currentState.remaining
			})
		}
	}
return results
	
}