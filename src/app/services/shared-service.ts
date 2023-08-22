import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class SharedService{
patients = [
    {
      "id": 1,
      "uid": 123456,
      "firstName": "Alice",
      "lastName": "Johnson",
      "city": "New York",
      "age": 28,
      "email": "alice@example.com"
    },
    {
      "id": 2,
      "uid": 234567,
      "firstName": "Bob",
      "lastName": "Smith",
      "city": "Los Angeles",
      "age": 35,
      "email": "bob@example.com"
    },
    {
      "id": 3,
      "uid": 345678,
      "firstName": "Eva",
      "lastName": "Williams",
      "city": "Chicago",
      "age": 22,
      "email": "eva@example.com"
    },
    {
      "id": 4,
      "uid": 456789,
      "firstName": "David",
      "lastName": "Brown",
      "city": "Houston",
      "age": 40,
      "email": "david@example.com"
    },
    {
      "id": 5,
      "uid": 567890,
      "firstName": "Sophia",
      "lastName": "Davis",
      "city": "Miami",
      "age": 31,
      "email": "sophia@example.com"
    },
    {
      "id": 6,
      "uid": 678901,
      "firstName": "Jack",
      "lastName": "Wilson",
      "city": "San Francisco",
      "age": 29,
      "email": "jack@example.com"
    },
    {
      "id": 7,
      "uid": 789012,
      "firstName": "Olivia",
      "lastName": "Taylor",
      "city": "Seattle",
      "age": 27,
      "email": "olivia@example.com"
    },
    {
      "id": 8,
      "uid": 890123,
      "firstName": "Noah",
      "lastName": "Miller",
      "city": "Boston",
      "age": 33,
      "email": "noah@example.com"
    },
    {
      "id": 9,
      "uid": 901234,
      "firstName": "Ava",
      "lastName": "Martinez",
      "city": "Dallas",
      "age": 26,
      "email": "ava@example.com"
    },
    {
      "id": 10,
      "uid": 123450,
      "firstName": "Liam",
      "lastName": "Rodriguez",
      "city": "Denver",
      "age": 30,
      "email": "liam@example.com"
    },
    {
      "id": 11,
      "uid": 234561,
      "firstName": "Emma",
      "lastName": "Lopez",
      "city": "Phoenix",
      "age": 24,
      "email": "emma@example.com"
    },
    {
      "id": 12,
      "uid": 345672,
      "firstName": "Mia",
      "lastName": "Garcia",
      "city": "Atlanta",
      "age": 37,
      "email": "mia@example.com"
    },
    {
      "id": 13,
      "uid": 456783,
      "firstName": "Lucas",
      "lastName": "Lee",
      "city": "Washington",
      "age": 32,
      "email": "lucas@example.com"
    },
    {
      "id": 14,
      "uid": 567894,
      "firstName": "Isabella",
      "lastName": "Scott",
      "city": "Detroit",
      "age": 23,
      "email": "isabella@example.com"
    },
    {
      "id": 15,
      "uid": 678905,
      "firstName": "Jackson",
      "lastName": "White",
      "city": "Minneapolis",
      "age": 28,
      "email": "jackson@example.com"
    },
    {
      "id": 16,
      "uid": 789016,
      "firstName": "Emily",
      "lastName": "Harris",
      "city": "Portland",
      "age": 25,
      "email": "emily@example.com"
    },
    {
      "id": 17,
      "uid": 890127,
      "firstName": "Daniel",
      "lastName": "Clark",
      "city": "Philadelphia",
      "age": 34,
      "email": "daniel@example.com"
    },
    {
      "id": 18,
      "uid": 901238,
      "firstName": "Avery",
      "lastName": "King",
      "city": "Austin",
      "age": 29,
      "email": "avery@example.com"
    },
    {
      "id": 19,
      "uid": 123459,
      "firstName": "Logan",
      "lastName": "Green",
      "city": "San Diego",
      "age": 31,
      "email": "logan@example.com"
    },
    {
      "id": 20,
      "uid": 234560,
      "firstName": "Harper",
      "lastName": "Perez",
      "city": "Charlotte",
      "age": 26,
      "email": "harper@example.com"
    }
  ]
  
    selectedPatient: any;
   
}