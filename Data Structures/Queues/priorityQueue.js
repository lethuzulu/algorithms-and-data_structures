function PriorityQueue() {
    let items = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        let queuedElement = new QueueElement(element, priority);

        let added = false;

        for (let i = 0; i < items.length; i++) {
            if (queuedElement.priority < items[i].priority) {
                items.splice(i, 0, queuedElement);
                added = true;
                break;
            }
            if (!added) {
                items.push(queuedElement);
            }

        }

    }

    this.dequeue = function () {
        
    }


}