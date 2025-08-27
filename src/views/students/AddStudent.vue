<template>
    <form @submit.prevent="addStudent">
        <label for="name">Name</label>
        <input v-model="name" placeholder="Type your name" required/>
        <label for="course">Course</label>
        <input v-model="course" placeholder="Type your course" required/>
        <button type="submit">Add student</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const course = ref('');

async function addStudent() {
    const response = await fetch('http://127.0.0.1:5000/add-student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            course: course.value
        }),
    });
    const result = await response.json()
    if (response.ok) {
        alert('Student added successfully');
        name.value = '';
        course.value = '';
    } else {
        alert('Error adding student: ' + result.message);
    }
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 60px auto;
  padding: 32px 28px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

label {
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 6px;
}

input {
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.2s;
}

input:focus {
  border-color: #1976d2;
  outline: none;
}

button[type="submit"] {
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 12px 0;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

button[type="submit"]:hover {
  background: #1565c0;
}
</style>