# Insertion Sort 

Selection Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Pseudocode

![](Pseudocode.PNG)

## Trace

### Sample Array: [8,4,23,42,16,15]

### Pass 1:

![](pass1.jpg)

### Pass 2:

![](pass2.jpg)

### Pass 3:

![](pass3.jpg)

### Pass 4:

![](pass4.jpg)

### Pass 5:

![](pass5.jpg)

### Pass 6:

![](pass6.jpg)


### Efficency
#### Time: O(n^2)
The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.
#### Space: O(1)
No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).








 



