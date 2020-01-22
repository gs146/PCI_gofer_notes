filterm.(p::xs) = [x | x <- xs, x `mod` p /= 0]
sieve.(p::ns) = p:: sieve.(filterm.(p::ns))

sieve'.(p::ns) = p:: sieve'.[x | x <- ns, x `mod` p /=0]

fibs = 1 :: 2 :: zipWith.(+).fibs.(tail.fibs)