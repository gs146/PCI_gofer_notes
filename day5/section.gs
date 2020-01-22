f.x.y= x + 2*y

x +-+ y = x + 2*y

--lf = [\x -> x*x, \x -> 2*x]

cf.x = hdcf
  where hdcf.y = 2*x+y

--cf.x.y = 2*x+y

lf = [cf.i | i <- [1...3]]