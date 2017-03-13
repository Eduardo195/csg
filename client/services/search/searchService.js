import $ from 'jquery';

function getValArr({ all, selected }) {
    const selectedObjs = all.filter((loc, index) => selected.indexOf(index) >= 0);
    return selectedObjs.map(l => l.label);
}

function prepFilters(filters) {
    const { itemsPerPage: limit, page, contracts, keywords, age } = filters;
    const contractTypes = filters.contractTypes.selected;// getValArr(filters.contractTypes);
    const locations = filters.locations.selected; // getValArr(filters.locations);

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
