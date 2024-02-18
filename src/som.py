class Square:
   def __init__(self):
      pass

class Area(Square):
   def __init__(self):
      pass

class Quadri(Area):
   def __init__(self):
      pass


square = Square()
area = Area()
quadri= Quadri()

print(isinstance(area, Square))
print(isinstance(Quadri, Square))

