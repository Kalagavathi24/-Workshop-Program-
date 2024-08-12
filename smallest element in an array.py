arr = [44, 2, 1, 55, 3, 76]
small_element = arr[0]
for num in arr:
    if num < small_element:
        small_element = num
print('The smallest element in the array is:', small_element)
