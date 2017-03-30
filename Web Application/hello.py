# _*_coding:utf-8_*_
import sys, json

#print("\n".join(sys.argv))

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    # Get our data as an array from read_in()
    lines = read_in()

    # Sum  of all the items in the provided array
    total_sum_inArray = 0
    for item in lines:
        total_sum_inArray += item

    # Return the sum to the output stream
    print(total_sum_inArray)

def main2():
    lines = read_in()

    my_answer = ' - modified by Python 2.7'
    for item in lines:
        new_answer = ''
        new_answer = item + my_answer
        print(new_answer)

# Start process
if __name__ == '__main__':
    main2()