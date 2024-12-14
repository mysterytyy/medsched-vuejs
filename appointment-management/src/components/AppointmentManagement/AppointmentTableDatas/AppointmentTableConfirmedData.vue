<template>
    <div>
        <table class="w-full text-gray-500 text-base">
            <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-[Inter]">
                <tr>
                    <th class="px-6 py-3">ID</th>
                    <th class="px-6 py-3">Name</th>
                    <th class="px-6 py-3">Date</th>
                    <th class="px-6 py-3">Time</th>
                    <th class="px-6 py-3">Reason</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="request in requests" :key="request.appointment_id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td class="px-6 py-3">{{ request.appointment_id }}</td>
                    <td class="px-6 py-3">{{ request.patient_name }}</td>
                    <td class="px-6 py-3">{{ request.appointment_date }}</td>
                    <td class="px-6 py-3">{{ request.appointment_time }}</td>
                    <td class="px-6 py-3">{{ request.reason }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "ConfirmedTable",
    props: {
        requests: {
            type: Array,
            required: true,
        },
    },
};
</script>
