export default {
	treatementGroups: [
		{ id: 1, name: "group 1" },
		{ id: 2, name: "group 2" },
		{ id: 3, name: "group 3" },
		{ id: 4, name: "group 4" },
	],
	treatements: [
		{ id: 1, group: 1, name: "treatement 1" },
		{ id: 2, group: 1, name: "treatement 2" },
		{ id: 3, group: 1, name: "treatement 3" },
		{ id: 4, group: 1, name: "treatement 4" },
		{ id: 5, group: 2, name: "treatement 5" },
		{ id: 6, group: 2, name: "treatement 6" },
		{ id: 7, group: 2, name: "treatement 7" },
		{ id: 8, group: 2, name: "treatement 8" },
		{ id: 9, group: 3, name: "treatement 9" },
		{ id: 10, group: 3, name: "treatement 10" },
		{ id: 11, group: 3, name: "treatement 11" },
		{ id: 12, group: 3, name: "treatement 12" },
		{ id: 13, group: 4, name: "treatement 13" },
		{ id: 14, group: 4, name: "treatement 14" },
		{ id: 15, group: 4, name: "treatement 15" },
		{ id: 16, group: 4, name: "treatement 16" },
	],
	cities: [
		{ id: 1, name: "city 1" },
		{ id: 2, name: "city 2" },
		{ id: 3, name: "city 3" },
	],
	disctricts: [
		{ id: 1, city: 1, name: "district 1" },
		{ id: 2, city: 1, name: "district 2" },
		{ id: 3, city: 2, name: "district 3" },
		{ id: 4, city: 2, name: "district 4" },
		{ id: 5, city: 3, name: "district 5" },
		{ id: 6, city: 3, name: "district 6" },
	],
	clinics: [
		{
			id: 1,
			name: "clinic 1",
			district: 1,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			language: ["all", "english", "turkish"],
			rating: 3,
		},
		{
			id: 2,
			name: "clinic 2",
			district: 2,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			language: ["all", "turkish"],
			rating: 3,
		},
		{
			id: 3,
			name: "clinic 3",
			district: 3,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			language: ["all", "english", "turkish"],
			rating: 4,
		},
		{
			id: 4,
			name: "clinic 4",
			district: 4,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			language: ["all", "english", "turkish"],
			rating: 4,
		},
		{
			id: 5,
			name: "clinic 5",
			district: 5,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			language: ["all", "turkish"],
			rating: 5,
		},
		{
			id: 6,
			name: "clinic 6",
			district: 6,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			language: ["all", "english", "turkish"],
			rating: 5,
		},
	],
	doctors: [
		{
			id: 1,
			name: "doctor 1",
			clinic: 1,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			schedule: "",
		},
		{
			id: 2,
			name: "doctor 2",
			clinic: 2,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			schedule: "",
		},
		{
			id: 3,
			name: "doctor 3",
			clinic: 3,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			schedule: "",
		},
		{
			id: 4,
			name: "doctor 4",
			clinic: 4,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			schedule: "",
		},
		{
			id: 5,
			name: "doctor 5",
			clinic: 5,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			schedule: "",
		},
		{
			id: 6,
			name: "doctor 6",
			clinic: 6,
			treatements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			schedule: "",
		},
	],
};
