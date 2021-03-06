import { CleanFilter } from './CleanFilter';

export class CoreColumns extends CleanFilter {

  constructor() {
    super( 'core-columns' );
  }

  hookCallback( attributes, name, innerBlocks ) {
    // if only contains one block, return attributes
    if ( ! innerBlocks.length ) {
        return attributes;
    }
    
    // Define columns
    let columns = {
        column_1: [],
        column_2: []
    };
    
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

        // Validation to determine which column to put inner block
        if ( 'column-1' === block.attributes.layout ) {
            // Put block in col 1
            columns.column_1.push( innerBlocks[index] );
        } else if ( 'column-2' === block.attributes.layout ) {
            // Put block in col 2
            columns.column_2.push( innerBlocks[index] );
        }
    }
    
    // Return attributes, innerBlocks & cols
    return {
        attributes: attributes,
        innerBlocks: innerBlocks,
        columns: columns
    };
  }

}