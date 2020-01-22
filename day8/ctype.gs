ctype Tree.a where
      Lf : Tree.a
      Br : a -> Tree.a -> Tree.a

t2l : Tree.a -> [a]
l2t : [a] -> Tree.a

l2t.[]      = Lf
l2t.(x::xs) = Br.x.(l2t.xs)

t2l.Lf      = []
t2l.(Br.a.b)= a::(t2l.b)

ctype State where
   Q0, QF : State

--ctype T where
--  C : aa -> bb -> ... -> T


ctype Nat where
      Z : Nat
      S : Nat -> Nat

num2nat : Int -> Nat

num2nat.x
	| x>0 = S.(num2nat.(x-1))
--	| otherwise = Z

num2nat'.0     = Z
num2nat'.(x+1) = S.(num2nat'.x)

nat2num : Nat -> Int

nat2num.Z = 0
nat2num.(S.x) = 1+ nat2num.x


inf = S.inf
numsfrom.x = x::numsfrom.(x+1)