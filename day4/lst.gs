inc.x = x + 1

myadd.(x,y) = x + y


myadd1.x.y = x + y

myappend: [a]->[a]->[a]
myappend.x.y = x ++ y

--len:[a]->Int

x = [1...10]
y = 1::y


m.x.y = 1 + y

len.[]		= 0
len.(x::xs)	=m. x . (len.xs)

prod.[]		= 1
prod.(x::xs)	=(*).x . (prod.xs)

s1.[]		=[]
s1.(x::xs)	=(++).x. (s1.xs)

func.(y::ys,op,em)= (op).y.(func.(ys,op,em))
func.([],op,em)=em

len1.l = foldr. m.0.l

len2 = foldr. m.0

prod1.l = func.(l,(*),1)
s11.l = func.(l,(++),[])

func1.(y::ys,op,em)= (op).(func1.(ys,op,em)).y
func1.([],op,em)=em
cnsr.x.y = y :: x

myreduce2.(k, i, y::ys) = myreduce2.(k, k.i.y,ys)
myreduce2.(k, i, []) = i


ss.p.a.b = p.(a,b)



