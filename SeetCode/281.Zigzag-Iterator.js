/*
Given two vectors of integers v1 and v2, implement an iterator to return their elements alternately.

Implement the ZigzagIterator class:

    ZigzagIterator(List<int> v1, List<int> v2) initializes the object with the two vectors v1 and v2.
    boolean hasNext() returns true if the iterator still has elements, and false otherwise.
    int next() returns the current element of the iterator and moves the iterator to the next element.
*/

class ZigzagIterator {
    constructor(arr1, arr2) {
        this.n1 = arr1.length;
        this.n2 = arr2.length;
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.i = 0;
        this.j = 0;
    }

    hasNext()   {
        return this.i < this.n1 || this.j < this.n2;
    }

    next()  {
        while(this.i < this.n1 || this.j < this.n2) {
            if((this.i <= this.j || this.j == this.n2) && this.i < this.n1) {
                this.i++;
                return this.arr1[this.i - 1];
            }
            else if(this.j < this.n2) {
                this.j++;
                return this.arr2[this.j - 1];
            }
        }
    }
}

const v1 = [1,2], v2 = [3,4,5,6]
let count = v1.length + v2.length
const itr = new ZigzagIterator(v1, v2);
while (itr.hasNext() && count--) 
    console.log( itr.next() ) // 1, 3, 2, 4, 5, 6