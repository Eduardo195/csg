import $ from 'jquery';

function prepFilters(filters) {
    const { itemsPerPage: limit, page, keywords, age } = filters;
    const contractTypes = filters.contractTypes.selected;
    const locations = filters.locations.selected;

    const newFilters = {
        locations,
        keywords,
        contractTypes,
        limit,
        age,
        page: (page - 1),
    };

    return newFilters;
}

const SearchService = {
    search(filters) {
        return new Promise((resolve) => {
            $.ajax({
                url: '/api/search',
                data: prepFilters(filters),
            }).done((data) => {
                resolve(data);
            });
        });
    },
    getLatest() {
        return new Promise((resolve) => {
            $.ajax({
                url: '/api/latest',
            }).done((data) => {
                resolve(data);
            });
        });
    },
    getDistricts() {
        return new Promise((resolve) => {
            $.ajax({
                url: '/api/districts',
            }).done((data) => {
                resolve(data);
            });
        });
    },
    getContractTypes() {
        return new Promise((resolve) => {
            $.ajax({
                url: '/api/contractTypes',
            }).done((data) => {
                resolve(data);
            });
        });
    },
};

export default SearchService;
