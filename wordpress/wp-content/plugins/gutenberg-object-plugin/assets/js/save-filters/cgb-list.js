import { CleanFilter } from './CleanFilter';

export class CGBList extends CleanFilter {

    constructor() {
        super( 'cgb-list' );
    }

    hookCallback( attributes, name, innerBlocks ) {
        // if only contains one block, return attributes
        if ( ! innerBlocks.length ) {
            return attributes;
        }

        // For each block entry, extract index and block
        for( const[index, block] of innerBlocks.entries() ) {
            // Retrieve and format block name
            let blockName = block.name.replace( '/', '-' );

            // Add the inner block's data to the innerBlocks output array
            innerBlocks[index].data = {
                attributes: wp.hooks.applyFilters( `clean_data_${blockName}`, block.attributes, block.name, block.innerBlocks )
            };
            // Associate the innerBlocks data with the blockName
            innerBlocks[index].name = block.name;
        }

        // Return attributes, innerBlocks & cols
        return {
            attributes: attributes,
            innerBlocks: innerBlocks,
        };
    }
}