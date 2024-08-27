from abc import *
class Accout(ABC):
    @abstractmethod
    def cal_bal(self):
        pass


a1=Accout()
print(id(a1))