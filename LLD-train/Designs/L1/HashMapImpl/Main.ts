import HashMap from './HashMap';

const hashMap = new HashMap(16);
hashMap.put('name', 'John Doe');
hashMap.put('age', 25);
hashMap.put('dob', '01/01/1996');
console.log(hashMap.get('name')); // John Doe
console.log(hashMap.get('age')); // 25
console.log(hashMap.get('dob')); // 01/01/1996
console.log(hashMap.get('address'));
