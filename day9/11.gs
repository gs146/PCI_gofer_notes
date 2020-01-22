ctype Tree.a where
--    Lf : a -> Tree.a
      Emt: Tree.a
      Br : a -> Tree.a -> Tree.a -> Tree.a

foldTree : (a->b->b->b) -> b -> Tree.a -> b

foldTree.f.idt.Emt = idt
foldTree.f.idt.(Br.x.left.right) = f.x.(foldTree.f.idt.left).(foldTree.f.idt.right)

-- foldr.f.idt.[] = idt
-- foldr.f.idt.((::).x.xs) = f.x.(foldr.f.idt.xs)

