import { Injectable } from '@angular/core';
import { Course } from './course';


@Injectable({
    providedIn: 'root'
})
export class CourseService {

    retriveAll(): Course[] {
        return COURSES;
    }

    retrieveById(id: number): Course {
        return COURSES.find((courseIterator: Course) => courseIterator.id === id);
    }

    save(course: Course): void {
        if(course.id) {
            const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
            COURSES[index] = course;
        }
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: "Angular 2",
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 3,
        releaseDate: 'December, 2, 2019'
    },
    {
        id: 2,
        name: "Angular 3",
        imageUrl: '/assets/images/cli.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 5,
        releaseDate: 'December, 3, 2019'
    },
    {
        id: 3,
        name: "Angular 4",
        imageUrl: '/assets/images/router.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 1,
        releaseDate: 'December, 4, 2019'
    },
    {
        id: 4,
        name: "Angular 2",
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 2.5,
        releaseDate: 'December, 2, 2019'
    },
    {
        id: 5,
        name: "Angular 3",
        imageUrl: '/assets/images/cli.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 4,
        releaseDate: 'December, 3, 2019'
    },
    {
        id: 6,
        name: "Angular 4",
        imageUrl: '/assets/images/router.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 3,
        releaseDate: 'December, 4, 2019'
    },
    {
        id: 7,
        name: "Angular 2",
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 5,
        releaseDate: 'December, 2, 2019'
    },
    {
        id: 8,
        name: "Angular 3",
        imageUrl: '/assets/images/cli.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 3,
        releaseDate: 'December, 3, 2019'
    },
    {
        id: 9,
        name: "Angular 4",
        imageUrl: '/assets/images/router.png',
        price: 99.99,
        code: 'ABC-123',
        duration: 120,
        description: "Nesse curso os alunos irão aprender um grande conhecimento nos principios basicos",
        rating: 3,
        releaseDate: 'December, 4, 2019'
    }
];