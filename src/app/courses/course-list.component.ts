import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular 2",
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'ABC-123',
                duration: 120,
                rating: 3,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: "Postgress",
                imageUrl: '/assets/images/http.png',
                price: 30.99,
                code: 'ABC-123',
                duration: 120,
                rating: 5,
                releaseDate: 'December, 4, 2019'
            },
            {
                id: 3,
                name: "Postgress",
                imageUrl: '/assets/images/http.png',
                price: 30.99,
                code: 'ABC-123',
                duration: 120,
                rating: 3.5,
                releaseDate: 'December, 4, 2019'
            },
        ]
    }

}