
sum1.[] = 0
sum1.(x::xs) = x + sum1.xs

sum2.[].acc = acc
sum2.(x::xs).acc = sum2.xs.(acc+x)

sum3.[].f = f
sum3.(x::xs).f = sum3.xs.(f;(+x))



map1.fun.[] = []
map1.fun.(x::xs) = fun.x :: map1.fun.xs

map2.fun.[].acc = acc
map2.fun.(x::xs).acc = map2.fun.xs.(acc ++ [fun.x])

map3.fun.[].acc = acc
map3.fun.(x::xs).acc = map3.fun.xs.(acc;g)
		       where g.y = y++[fun.x]
