import { StyleSheet } from 'react-native';

const createMenuStyles = (theme) => StyleSheet.create({

  optionsMenu: {
    backgroundColor: theme === 'dark' ? '#121212' : 'white',
  },
  optionText: {
    color: theme === 'dark' ? '#FFFFFF' : '#000000',
  },
  sectionTitle: {
    color: theme === 'dark' ? '#FFFFFF' : '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: theme === 'dark' ? '#333333' : '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: theme === 'dark' ? '#444444' : '#e0e0e0',
  },

  searchBarContainer: {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    borderBottomColor: theme === 'dark' ? '#555' : '#E0E0E0',
  },
  searchInput: {
    backgroundColor: theme === 'dark' ? '#555' : '#F5F5F5',
    color: theme === 'dark' ? '#FFFFFF' : '#000000',
  },

  addProductModalView: {
    backgroundColor: theme === 'dark' ? '#121212' : '#fff',
  },
  modalInput: {
    color: theme === 'dark' ? '#FFFFFF' : '#000000',
    backgroundColor: theme === 'dark' ? '#333' : '#FFFFFF',
    borderColor: theme === 'dark' ? '#555' : '#E0E0E0',
  },

  editProductModalView: {
    backgroundColor: theme === 'dark' ? '#121212' : '#fff',
  },

  saveDataModalView: {
    backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
  },

  loadDataMenu: {
    backgroundColor: theme === 'dark' ? '#121212' : 'white',
  },
  fileItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme === 'dark' ? '#333' : '#e0e0e0',
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fileItemText: {
    marginLeft: 10,
    color: theme === 'dark' ? '#FFFFFF' : '#000000',
    fontSize: 16,
  },
  loadDeleteButton: {
    padding: 5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: theme === 'dark' ? '#FFFFFF' : '#000000',
  },

  bottomButton: {
    backgroundColor: theme === 'dark' ? '#555' : '#3F51B5',
  },
  buttonText: {
    color: theme === 'dark' ? '#FFFFFF' : '#FFFFFF',
  },
  crossIcon: {
    color: theme === 'dark' ? '#FFFFFF' : '#333',
  },

  modalView: {
    backgroundColor: theme === 'dark' ? '#121212' : 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    maxWidth: 400,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme === 'dark' ? '#FFFFFF' : '#3F51B5',
    marginBottom: 20,
  },

  bottomButtonsContainer: {
    backgroundColor: theme === 'dark' ? '#121212' : '#F5F5F5',
    borderTopColor: theme === 'dark' ? '#333' : '#E0E0E0',
  },

  saveButton: {
    backgroundColor: theme === 'dark' ? '#45a049' : '#4CAF50',
  },
  loadButton: {
    backgroundColor: theme === 'dark' ? '#1e88e5' : '#2196F3',
  },
  neutralBalance: {
    color: theme === 'dark' ? '#9e9e9e' : '#757575',
  },
  totalProfit: {
    color: theme === 'dark' ? '#66bb6a' : '#4CAF50',
  },
  totalLoss: {
    color: theme === 'dark' ? '#ef5350' : '#F44336',
  },
  productProfit: {
    color: theme === 'dark' ? '#66bb6a' : '#4CAF50',
  },
  productLoss: {
    color: theme === 'dark' ? '#ef5350' : '#F44336',
  },
  productNeutralBalance: {
    color: theme === 'dark' ? '#9e9e9e' : '#757575',
  },
  container: {
    flex: 1,
    backgroundColor: theme === 'dark' ? '#121212' : '#F5F5F5',
  },
  animatedContainer: {
    flex: 1,
    backgroundColor: theme === 'dark' ? '#121212' : '#F5F5F5',
  },
});

export default createMenuStyles;
