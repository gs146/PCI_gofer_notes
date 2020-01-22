type FSM.q.sigma = (q -> sigma -> q, q, [q])

genaccept : FSM.q.sigma -> [sigma] -> Bool
genaccept.(del,q0,qfs).l = foldl.del.q0.l `elem` qfs


ctype State where
 Q0, QF, En: State


del: State -> Int -> State

del. Q0. 1 = QF
del. Q0. 0 = En
del. QF. 0 = QF
del. QF. 1 = En
del. En. 0 = En
del. En. 1 = En
myaccept: [Int] -> Bool

qfs = [QF]


--genaccept.(del,q0,qfs) = acceptor
--  where
--     acceptor.l  = foldl.del.q0.l `elem` qfs


delc. Q0. '1' = QF
delc. Q0. '0' = En
delc. QF. '0' = QF
delc. QF. '1' = En
delc. En. '0' = En
delc. En. '1' = En


myaccept.l = foldl.del.Q0.l `elem` qfs

accept.(delta,q0,qfs).(x::xs) =
       accept.(delta,delta.q0.x,qfs).xs
accept.(delta,q0,qfs).[] = elem.q0.qfs

accept'.delta.qfs.q0.(x::xs) = accept'.delta.qfs.(delta.q0.x).xs
accept'.delta.qfs.q0.[] = elem.q0.qfs                            

accept''.delta.qfs.q0.l = (myacceptor.q0.l `elem` qfs)
  where
        myacceptor.q0.(x::xs) = myacceptor.(delta.q0.x).xs 
        myacceptor.q0.[] = q0


foldl_.f = myfolder
  where myfolder.z.[] = z
        myfolder.z.(x::xs) = myfolder.(f.z.x).xs

--foldl_.f.z.[]	  = z
--foldl_.f.z.(x::xs) = foldl_.f.(f.z.x).xs

f = \x -> 2*x
f'.x = 2*x