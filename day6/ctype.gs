ctype Dir where
  N,S,E,W : Dir

turnR. N = E
turnR. E = S
turnR. S = W
turnR. W = N

ctype Tree where
  Lf:Int->Tree
  Br:Int->Tree->Tree->Tree

inorder:Tree ->[Int]

inorder.(Lf.x) =[x]
inorder.(Br.x.t1.t2) = inorder.t1 ++ [x]++ inorder.t2

preorder.(Lf.x) =[x]
preorder.(Br.x.t1.t2) = [x] ++ preorder.t1 ++ preorder.t2

postorder.(Lf.x) =[x]
postorder.(Br.x.t1.t2) =  postorder.t1 ++ postorder.t2 ++[x]

t1 = Br.3.(Lf.4).(Lf.5)
t2 = Br.7.(Lf.8).(Lf.9)
t3 = Br.10.t1.t2

ctype Exp where
  Lef: Int->Exp
  Plus,Mul: Exp->Exp ->Exp

--eval: Exp -> Int
eval.(Plus.e1.e2)	= eval.e1 + eval.e2
eval.(Mul.e1.e2)	= eval.e1  * eval.e2
eval.(Lef.e)		= e

ctype Inst where
  Ld: Int->Inst	
  Iplus,Imul:Inst

genCode: Exp -> [Inst]
genCode.(Lef.x)=[Ld.x]
genCode.(Plus.x.y)= genCode.x ++ genCode.y++[Iplus]
genCode.(Mul.x.y)= genCode.x ++ genCode.y ++[Imul]

sim:[Inst] ->[Int]-> [Int]
sim.[].st = st
sim.(Ld.x::ins).st = sim.ins.(x :: st)
sim.(Iplus::ins).(r::l::sts) = sim.ins.((l+r)::sts)
sim.(Imul::ins). (r::l::sts) = sim.ins.((l*r)::sts)
--sim.(in::ins)

fsim = foldl.op.[]
fsim'.l = head.(fsim.l)

op:[Int] -> Inst -> [Int]
op.y.(Ld.x)		= x :: y
op.(l::r::sts).(Iplus)	= l + r :: sts
op.(l::r::sts).(Imul)	= l * r :: sts
