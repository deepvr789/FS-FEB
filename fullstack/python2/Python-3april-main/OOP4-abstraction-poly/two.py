from abc import *
class Account(ABC):
    @abstractmethod
    def cal_bal(self):
        pass

class SA(Account):
    def cal_bal(self):
        print("Calculating Balnce")


sa1=SA()
sa1.cal_bal()