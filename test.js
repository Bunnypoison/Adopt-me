//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//sum

function simpleAdding(num) {
place = 0;
i=num
do {
place = place += i; i--
}
while (i > 0);
return place

}