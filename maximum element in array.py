arr = [3, 5, 7, 1, 9]
max_element = arr[0]

for num in arr:
    if num > max_element:
        max_element = num

print("The maximum element in the array is:", max_element)
