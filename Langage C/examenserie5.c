#include <stdio.h>
#include <string.h>

#define DAYS_IN_MONTH 30
#define NUM_SHOPS 3

// Fonction pour calculer la moyenne des ventes journalières
float calculateAverage(int sales[], int num_days) {
    int sum = 0;
    for (int i = 0; i < num_days; i++) {
        sum += sales[i];
    }
    return (float)sum / num_days;
}

// Fonction pour compter les jours où les ventes dépassent un seuil
int countDaysAboveThreshold(int sales[], int num_days, int threshold) {
    int count = 0;
    for (int i = 0; i < num_days; i++) {
        if (sales[i] > threshold) {
            count++;
        }
    }
    return count;
}

// Fonction principale
int main() {
    char shop_names[NUM_SHOPS][50];
    int sales[NUM_SHOPS][DAYS_IN_MONTH];
    float averages[NUM_SHOPS];
    int days_above_average[NUM_SHOPS];
    int threshold = 300;

    // Saisie des noms des boutiques
    printf("Entrez les noms des boutiques :\n");
    for (int i = 0; i < NUM_SHOPS; i++) {
        printf("Boutique %d: ", i + 1);
        scanf("%s", shop_names[i]);
    }

    // Saisie des ventes journalières pour chaque boutique
    for (int i = 0; i < NUM_SHOPS; i++) {
        printf("\nEntrez les ventes pour %s :\n", shop_names[i]);
        for (int j = 0; j < DAYS_IN_MONTH; j++) {
            printf("Jour %d: ", j + 1);
            scanf("%d", &sales[i][j]);
        }
    }

    // Calcul des moyennes journalières et des jours dépassant la moyenne
    for (int i = 0; i < NUM_SHOPS; i++) {
        averages[i] = calculateAverage(sales[i], DAYS_IN_MONTH);

        days_above_average[i] = 0;
        for (int j = 0; j < DAYS_IN_MONTH; j++) {
            if (sales[i][j] > averages[i]) {
                days_above_average[i]++;
            }
        }
    }

    // Affichage des résultats
    printf("\nRésultats:\n");
    for (int i = 0; i < NUM_SHOPS; i++) {
        printf("Boutique: %s\n", shop_names[i]);
        printf("Moyenne des ventes journalières: %.2f\n", averages[i]);
        printf("Jours dépassant la moyenne journalière: %d\n", days_above_average[i]);
        printf("Jours dépassant %d€: %d\n", threshold, countDaysAboveThreshold(sales[i], DAYS_IN_MONTH, threshold));
        printf("\n");
    }

    // Détermination de la boutique ayant le plus souvent dépassé le seuil
    int max_days = 0, best_shop_index = 0;
    for (int i = 0; i < NUM_SHOPS; i++) {
        int days_above_threshold = countDaysAboveThreshold(sales[i], DAYS_IN_MONTH, threshold);
        if (days_above_threshold > max_days) {
            max_days = days_above_threshold;
            best_shop_index = i;
        }
    }
    printf("La boutique qui a le plus souvent dépassé %d€ est : %s\n", threshold, shop_names[best_shop_index]);

    return 0;
}