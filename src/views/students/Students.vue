<script setup> //Composition API
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const Students = ref([]);

onMounted(async () => {
  const response = await fetch('http://127.0.0.1:5000/students');
  Students.value = await response.json();
})

// Function to delete a student
async function deleteStudent(id) {
  const response = await fetch(`http://localhost:5000///students/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )
  const result = await response.json();
  if (response.ok) {
    // Remove the student from the list
    Students.value = Students.value.filter(student => student.id !== id);
    alert('Student deleted successfully');
  } else {
    alert('Failed to delete student: ' + result.message);
  }
}
</script>


<template>
  <div>
    <div class="card">
      <div class="class-header">
        <h4>Students List</h4>
        <RouterLink to="/add-student" class="btn btn-primary">Add New Student</RouterLink>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in Students" :key="i.id">
              <td>{{ i.id }}</td>
              <td>{{ i.name }}</td>
              <td>{{ i.course }}</td>
              <td>
                <RouterLink :to="`/edit-student/${i.id}`" class="btn btn-warning">Edit</RouterLink>
                <button @click="deleteStudent(i.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 700px;
  margin: 40px auto;
  border-radius: 12px;
}
.class-header {
  background: blue;
  color: white;
  padding: 18px 24px; 
  border-bottom: 4px solid red;
}
.table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  font-size: 1rem;
}
.table th, .table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.table th {
  background-color: #f2f2f2;
}
.btn-primary  {
  color: white;
}

</style>