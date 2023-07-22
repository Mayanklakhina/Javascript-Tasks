// Priority Queues in Javascript


// Priority Queue class
class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    // Function to add an element to the queue with a given priority
      enqueue(element, priority) {
      this.queue.push({ element, priority });
      this.sortQueue();
    }
  
    // Function to remove and return the element with the highest priority
    dequeue() {
      if (this.isEmpty()) return null;
      return this.queue.shift().element;
    }
  
    // Function to check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Function to sort the queue based on priority (ascending order)
    sortQueue() {
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  }
  
  // Example usage
  const priorityQueue = new PriorityQueue();
  
  priorityQueue.enqueue("Task 10", 10);
  priorityQueue.enqueue("Task 7", 7);
  priorityQueue.enqueue("Task 3", 3);
  
  console.log(priorityQueue.dequeue()); // Output: "Task 3"
  console.log(priorityQueue.dequeue()); // Output: "Task 7"
  console.log(priorityQueue.dequeue()); // Output: "Task 10"
  console.log(priorityQueue.dequeue()); // Output: null (queue is empty)
  

// Sets in Javascript

// Creating a set
const mySet = new Set();

// Adding elements to the set
mySet.add("mayank");
mySet.add("sakshi");
mySet.add("ravi");
mySet.add("mayank"); // Adding a duplicate element, but it won't be added to the set

// Checking the size of the set
console.log(mySet.size); // Output: 3

// Checking if an element exists in the set
console.log(mySet.has("ravi")); // Output: true
console.log(mySet.has("tushar"));  // Output: false

// Removing an element from the set
mySet.delete("mayank");

// Looping through the set
mySet.forEach((i) => {
  console.log(i);
});


// Clearing the set
mySet.clear();

// Checking the size after clearing
console.log(mySet.size); // Output: 0
