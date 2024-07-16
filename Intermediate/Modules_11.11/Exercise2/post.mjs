export default class blogPost {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    publish() {
        console.log(`The post is being published as: ${this.title} and what will focus on: ${this.content}`);
    }
}
