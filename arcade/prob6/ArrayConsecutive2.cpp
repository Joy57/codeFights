#include <algorithm>
#include <iostream>
#include <vector>

int makeArrayConsecutive2(std::vector<int> statues) {
        //sort the given list
        std::sort(statues.begin(), statues.end());
        // ----------for debugging purpose----
        // for (auto a : statues) {
        //     std::cout << a << " ";
        // } 
        // std::cout << '\n'; 
        //------------------------------------
        
        //last item - first item - (size()) + 1; 
        return statues[statues.size()-1]-statues[0]-statues.size()+1;
}


int main (){
    //test 
    std::vector<int> v = {6,2,3,8};
    int res = makeArrayConsecutive2(v);
    std::cout<<"Result: "<< res <<std::endl;
}